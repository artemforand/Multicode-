local widget = require("widget")
local M = {}

M.items = {}

M.create = function()
    if not M.group then
        M.bgG = display.newGroup()
        M.group = display.newGroup()

        local bg = display.newImageRect(M.bgG, imageP('bg/brawl_stars_lobby'), ContentW, ContentH)
        bg.x, bg.y = CenterX, CenterY

        local close = display.newImageRect(M.group, "assets/textures/button/exit.png", sw(274/1.6), sh(174/1.6))
        close.x, close.y = px(-700), py(-295)
        close:addEventListener("tap", function()
            audio.play(MUSIC_1[1])
            FUN.delete(MENU, M)
            return true
        end)

        M.title, M.titleshadow = FUN.createTextWithShadow{
            parent = M.group,
            text = "Список лидеров",
            x = CenterX,
            y = CenterY - 325,
            font = "assets/Pusia",
            fontSize = sr(65),
            width = ContentW - 50,
            align = "center",
            color = {0.95, 0.95, 0.95}
        }

        M.scrollView = widget.newScrollView{
            x = CenterX,
            y = CenterY - 40,
            width = ContentW,
            height = ContentH - 350,
            horizontalScrollDisabled = true,
            backgroundColor = {0,0,0,0},
            hideBackground = true
        }
        M.group:insert(M.scrollView)

        M.userPanelGroup = display.newGroup()
        M.group:insert(M.userPanelGroup)
        M.userPanelGroup.x = CenterX
        M.userPanelGroup.y = CenterY + ContentH * 0.5 - 130
    else
        M.group.isVisible = true
        M.bgG.isVisible = true
    end

    loadAllData(function()
        local list = {}
        for id, info in pairs(DataInfoBase.PROFILE) do
            info.ids = id
            list[#list + 1] = info
        end

        table.sort(list, function(a,b)
            return (a.cubic or 0) > (b.cubic or 0)
        end)

        local yStart = 65
        local spacing = 125
        local userRank = 0
        local userData = nil

        for i = 1, #list do
            local info = list[i]
            local item = M.items[i]
            
            if info.ids == deviceId then
                userRank = i
                userData = info
            end

            if not item then
                item = {}
                item.group = display.newGroup()
                M.scrollView:insert(item.group)

                item.rect = display.newRoundedRect(item.group, 0, 0, ContentW - 120, 105, 28)
                item.rect.strokeWidth = 4

                item.icon = display.newRoundedRect(item.group, -360, 0, 85, 85, 15)
                
                item.rank = display.newImage(item.group,FUN.rankpath(FUN.getRank(1)),360,0)
                item.rank.xScale,item.rank.yScale = 0.5,0.5
                item.rankText = display.newText{
                    parent = item.group, text = "", x = -440, y = 0,
                    font = "assets/Pusia", fontSize = sr(42)
                }
                    print(item.rank)
                item.ranText = display.newText{
                    parent = item.group, text = "", x = 360, y = 0,
                    font = "assets/Pusia", fontSize = sr(42)
                }

                item.nameText = display.newText{
                    parent = item.group, text = "", x = -260, y = 0,
                    font = "assets/Pusia", fontSize = sr(40)
                }
                item.nameText.anchorX = 0

                item.cubicText = display.newText{
                    parent = item.group, text = "", x = 160, y = 0,
                    font = "assets/Pusia", fontSize = sr(42)
                }
                item.cubicText.anchorX = 1

                item.cubicIcon = display.newImageRect(item.group, imageP('other/cubic'), sr(55), sr(55))

                item.rect:addEventListener("tap", function()
                    transition.to(item.group, {time=100, xScale=0.9, yScale=0.9, onComplete=function()
                        transition.to(item.group, {time=200, xScale=1, yScale=1, transition=easing.outElastic, onComplete=function()
                            FUN.delete(nil, M, function()
                                PROFILE.create(DataInfoBase.PROFILE[item.id])
                            end)
                        end})
                    end})
                    return true
                end)

                M.items[i] = item
            end

            item.id = info.ids
            item.group.x = M.scrollView.width * 0.5
            item.group.y = yStart

            item.rankText.text = tostring(i)
            item.nameText.text = info.name or "Игрок"
            item.cubicText.text = tostring(info.cubic or 0)
            item.ranText.text = math.floor(info.cubic/1000)
            item.icon.fill = { filename = imageP('icons/'..(info.icon or 'default')), type="image" }
            item.rank.fill = { filename = FUN.rankpath(FUN.getRank(info.cubic)), type = "image" }
            if info.cubic > 1999 then
            item.rank.xScale,item.rank.yScale = 0.6,0.5
            end

            item.cubicIcon.x = item.cubicText.x - item.cubicText.width - sr(35)
            item.cubicIcon.y = item.cubicText.y

            if i == 1 then
                item.rect:setFillColor(1, 0.85, 0.1, 0.35)
                item.rect:setStrokeColor(1, 0.85, 0.1, 0.9)
                item.rankText:setFillColor(1, 0.85, 0.1)
            elseif i == 2 then
                item.rect:setFillColor(0.85, 0.85, 0.85, 0.35)
                item.rect:setStrokeColor(0.85, 0.85, 0.85, 0.9)
                item.rankText:setFillColor(0.9, 0.9, 0.9)
            elseif i == 3 then
                item.rect:setFillColor(0.85, 0.55, 0.25, 0.35)
                item.rect:setStrokeColor(0.85, 0.55, 0.25, 0.9)
                item.rankText:setFillColor(0.85, 0.55, 0.25)
            else
                item.rect:setFillColor(0, 0, 0, 0.6)
                item.rect:setStrokeColor(1, 1, 1, 0.1)
                item.rankText:setFillColor(1, 1, 1)
            end

            if info.ids == deviceId then
                item.nameText:setFillColor(0.4, 0.9, 1)
                item.rect:setFillColor(0.1, 0.4, 0.8, 0.5)
                item.rect:setStrokeColor(0.4, 0.9, 1, 0.8)
            else
                item.nameText:setFillColor(1, 1, 1)
            end

            item.group.alpha = 0
            item.group.xScale = 0.5
            item.group.yScale = 0.5
            transition.to(item.group, {
                time = 450,
                delay = i * 35,
                alpha = 1,
                xScale = 1,
                yScale = 1,
                transition = easing.outElastic
            })

            item.group.isVisible = true
            yStart = yStart + spacing
        end

        for i = #list + 1, #M.items do
            M.items[i].group.isVisible = false
        end

        M.scrollView:setScrollHeight(yStart + 50)

        if userData then
            if M.userPanelRect then
                display.remove(M.userPanelRect)
                display.remove(M.userPanelRank)
                display.remove(M.userPanelIcon)
                display.remove(M.userPanelName)
                display.remove(M.userPanelCubic)
                display.remove(M.userPanelCubicIcon)
            end

            M.userPanelRect = display.newRoundedRect(M.userPanelGroup, 0, 0, ContentW - 60, 135, 35)
            M.userPanelRect:setFillColor(0.05, 0.2, 0.4, 0.98)
            M.userPanelRect.strokeWidth = 6
            M.userPanelRect:setStrokeColor(0.3, 0.8, 1, 1)

            M.userPanelRank = display.newText{
                parent = M.userPanelGroup, text = tostring(userRank), x = -440, y = 0,
                font = "assets/Pusia", fontSize = sr(50)
            }
            M.userPanelRank:setFillColor(0.3, 0.8, 1)
                M.userrank = display.newImage(M.userPanelGroup,FUN.rankpath(FUN.getRank(userData.cubic)),360,0)
                M.userrank.xScale,M.userrank.yScale = 0.5,0.5
M.userranText = display.newText{
                    parent = M.userPanelGroup, text = math.floor(userData.cubic/1000), x = 360, y = 0,
                    font = "assets/Pusia", fontSize = sr(42)
                }
            M.userPanelIcon = display.newRoundedRect(M.userPanelGroup, -350, 0, 95, 95, 20)
            M.userPanelIcon.fill = { filename = imageP('icons/'..(userData.icon or 'default')), type="image" }

            M.userPanelName = display.newText{
                parent = M.userPanelGroup, text = userData.name or "Игрок", x = -260, y = 0,
                font = "assets/Pusia", fontSize = sr(45)
            }
            M.userPanelName.anchorX = 0
            M.userPanelName:setFillColor(1, 1, 1)

            M.userPanelCubic = display.newText{
                parent = M.userPanelGroup, text = tostring(userData.cubic or 0), x = 160, y = 0,
                font = "assets/Pusia", fontSize = sr(48)
            }
            M.userPanelCubic.anchorX = 1
            M.userPanelCubic:setFillColor(1, 1, 1)

            M.userPanelCubicIcon = display.newImageRect(M.userPanelGroup, imageP('other/cubic'), sr(65), sr(65))
            M.userPanelCubicIcon.x = M.userPanelCubic.x - M.userPanelCubic.width - sr(35)
            M.userPanelCubicIcon.y = M.userPanelCubic.y

            transition.to(M.userPanelRect, {
                time = 1200,
                strokeWidth = 10,
                transition = easing.continuousLoop,
                iterations = -1
            })

            M.userPanelGroup.y = CenterY + ContentH * 0.5 + 200
            transition.to(M.userPanelGroup, {
                time = 600,
                delay = 300,
                y = CenterY + ContentH * 0.5 - 130,
                transition = easing.outBack
            })

            M.userPanelRect:addEventListener("tap", function()
                transition.to(M.userPanelGroup, {time=100, xScale=0.92, yScale=0.92, onComplete=function()
                    transition.to(M.userPanelGroup, {time=200, xScale=1, yScale=1, transition=easing.outElastic, onComplete=function()
                        FUN.delete(nil, M, function()
                            PROFILE.create(DataInfoBase.PROFILE[deviceId])
                        end)
                    end})
                end})
                return true
            end)
        end
    end)

    M.group.xScale, M.group.yScale = PROFILE_PLAY.adapt, PROFILE_PLAY.adapt
    FUN.anim(M)
end

return M
