local M = {}
M.prime = false
 regime_select = require 'ui.modules.regime_select'
local toucho = require 'ui.modules.menu_touch'
M.regime_select = regime_select
M.toucho = toucho
M.animLock = false

M.randReload = function()
    toucho.randReload()
end

M.getBrawl = function()
    local base = 'assets/textures/brawlers/brawler/'
    return base .. (PROFILE_PLAY.skins and (PROFILE_PLAY.skins) or PROFILE_PLAY.brawler) .. '.png'
end

M.create = function()
    if M.prime and M.group then
        local PRIME = require 'ui.prime'
        PRIME.create(PROFILE_PLAY.brawler)
        return
    end

    if MENU.newRank then 
        audio.play(MUSIC_1[3])
        MENU.newRank = nil
    end 
   
    if not PROFILE_PLAY.season_reset and M.group then 
        local season_reset = require 'ui.modules.season_reset'
        PROFILE_PLAY.season_reset = true
        season_reset.reset('all')
        NEW_DATA()
        return
    end

    INFO_BR = BRAWLERS_INFO[PROFILE_PLAY.brawler]

    if M.animLock then return end
    M.animLock = true

    if M.group then
        M.group:removeSelf()
        M.group = nil
    end
    if M.bgG then
        M.bgG:removeSelf()
        M.bgG = nil
    end
    if M.updateFunc then
        Runtime:removeEventListener("enterFrame", M.updateFunc)
        M.updateFunc = nil
    end

    M.bgG = display.newGroup()
    M.group = display.newGroup()

    M.bg = display.newImage(M.bgG, imageP("bg/bg"), px(0), py(0))
    M.bg.width, M.bg.height = ContentW, ContentH
    M.parct = display.newImage(M.bgG, imageP("bg/particles"), px(0), py(0))
    M.parct1 = display.newImage(M.bgG, imageP("bg/particles"), M.parct.x - M.parct.width - 20, py(0))
    M.panel = display.newImage(M.bgG, imageP("bg/panel"), px(0), py(0))
    M.panel.width, M.panel.height = ContentW, ContentH
    M.parct.width, M.parct.height = ContentW, ContentH
    M.parct1.width, M.parct1.height = ContentW, ContentH

    M.parct.alpha = 0.05
    M.parct1.alpha = M.parct.alpha

    local speedX = 0.02
    local speedY = -0.2

    M.updateFunc = function()
        M.parct.x = M.parct.x + speedX
        M.parct.y = M.parct.y + speedY
        M.parct1.x = M.parct1.x + speedX
        M.parct1.y = M.parct1.y + speedY

        if M.parct.x - M.parct.width / 2 >= display.contentWidth then
            M.parct.x = M.parct1.x - M.parct.width
            M.parct.y = M.parct1.y
        end

        if M.parct1.x - M.parct1.width / 2 >= display.contentWidth then
            M.parct1.x = M.parct.x - M.parct1.width
            M.parct1.y = M.parct.y
        end
    end

    Runtime:addEventListener("enterFrame", M.updateFunc)

    M.resourceB = display.newRoundedRect(M.group, px(690), py(-280), sw(0), sh(0), sr(40))
    M.resourceB.isVisible = false

    M.buttons = {texts={}, icons={}}

    local ACW = ContentW
    local ACH = ContentH
    local originX = display.screenOriginX
    local originY = display.screenOriginY
    print(originX)
    local scaleX = ACW / 1600
    local scaleY = ACH / 720
    local scale = math.min(scaleX, scaleY)

    local buttonTable = {
        {id='shop', width=sw(APPINFO.menu.shop.width), height=sh(APPINFO.menu.shop.height), x=FUN.left()+100, y=py(APPINFO.menu.shop.y), icon='shop_icon', rounded=sr(APPINFO.menu.shop.rounded)},
        {id='settings', width=sw(211/1.8), height=sh(131/1.8), x=FUN.right()-100, y=py(25), icon='settings_icon', rounded=sr(20)},
        {id='profile', width=sw(300/1.9), height=sh(190/1.9), x=FUN.left()+120, y=py(-280), icon=PROFILE_PLAY.icons},
        {id='brawlers', width=sw(211/1.8), height=sh(133/1.8), x=FUN.left()+100, y=py(25), icon='BrawlersCardsIcon', rounded=sr(20)},
        {id='promo', width=sw(211/1.8), height=sh(141/1.8), x=FUN.left()+100, y=py(120), icon='gems', rounded=sr(20)},
        {id='quest', width=sw(211/1.8), height=sh(141/1.8), x=FUN.left()+450, y=originY+ACH/1.12+5, icon='news', rounded=sr(20)},
        {id='leader', width=sw(211/1.8), height=sh(130/1.75), x=FUN.right()-100, y=py(APPINFO.menu.shop.y), icon='icon_leardboards', rounded=sr(20)},
        {id='regime', width=sw(512/1.4), height=sh(153/1.4), x=FUN.right()-480, y=originY+ACH/1.12, rounded=sr(45), icon=(PROFILE_PLAY.regime=='gems' and 'gem icon_#0' or 'simulator')},
        {id='play', width=sw(390/1.45), height=sh(163/1.5), x=FUN.right()-150, y=originY+ACH/1.12, rounded=sr(45), color1={250/255,178/255,17/255}, color2={225/255,94/255,67/255}}
    }

    if not ICON_SELECT then ICON_SELECT = require 'ui.modules.ICON_SELECT' end

    for _, t in ipairs(buttonTable) do
        local radius = t.rounded or sr(30)
        local c1 = t.color1 or {76/255,86/255,105/255}
        local c2 = t.color2 or {49/255,60/255,66/255}
        local shadowOffset = sh(5)
        
        local shadow = display.newRoundedRect(M.group, CenterX+t.x, t.y + shadowOffset, t.width, t.height, radius)
        shadow:setFillColor(c2[1] * 0.5, c2[2] * 0.5, c2[3] * 0.5) 
        shadow.strokeWidth = 4
        shadow:setStrokeColor(0.05, 0.05, 0.15, 1)
        
        local but = display.newRoundedRect(CenterX+t.x, t.y, t.width, t.height, radius)
        but.id = t.id
        but.strokeWidth = 3
        but.shadow = shadow

        but:setStrokeColor(0,0,0,0.4)
        but:addEventListener("touch", toucho.touch)
        M.group:insert(but)

        but.fill = {type="gradient", color1=c1, color2=c2, direction="down"}

        if t.icon then
            local path = 'assets/textures/other/'..t.icon..'.png'
            if t.id=='profile' then path = imageP('icons/' .. ICON_SELECT.icons[PROFILE_PLAY.iconT][1]) end

            local icon = display.newImage(M.group, path)
            M.buttons.icons[t.id] = icon

            local maxW, maxH

            if t.id=='regime' then
                maxW, maxH = but.width*0.6, but.height*0.7
                icon.x, icon.y = but.x - sw(130), but.y
                local info = display.newImage(M.group, imageP('other/ui_sprite_0110'), but.x+150, but.y-30)
                info.width, info.height = info.width/1.8, info.height/1.8
            else
                maxW, maxH = but.width*0.62, but.height*0.62
                if t.icon=='news' then maxW, maxH = but.width*0.85, but.height*0.85
                elseif t.icon=='gems' then maxW, maxH = but.width*0.68, but.height*0.68 end
                icon.x, icon.y = but.x, but.y - sh(18)
            end

            local ratio = math.min(maxW / icon.width, maxH / icon.height)
            ratio = math.max(ratio, 0.2)

            icon.width = icon.width * ratio
            icon.height = icon.height * ratio
            if t.id == 'profile' then 
                icon.xScale, icon.yScale = 0.5, 0.5 
            end
        end

        local textValue = (t.id=='regime' and LANG[PROFILE_PLAY.regime]) or (t.id=='profile' and PROFILE_PLAY.nickname) or LANG[t.id] or "n"
        local yPos = (t.id=='profile' and but.y + sh(35)) or ((t.id ~= 'play' and t.id ~= 'regime') and but.y + sh(15)) or but.y

        local txt = display.newText({
            parent = M.group,
            text = textValue,
            x = (t.id~='regime' and but.x or but.x + sw(25)),
            y = yPos,
            font = "assets/Pusia",
            fontSize = (t.id=='play' and 39) or ((t.id=='profile') and 32) or (t.id=='regime' and 35) or 23,
            align = "center"
        })

        txt:setFillColor(1)
        txt.isWrapped = false

        while txt.width > but.width - sw(20) and txt.size > 8 do
            txt.size = txt.size - 1
        end

        M.buttons[t.id] = but
        M.buttons.texts[t.id] = txt
    end

    local cubic = display.newImage(M.group, 'assets/textures/cubic/cubic1.png', M.buttons.profile.x+260, M.buttons.profile.y)
    cubic.width, cubic.height = sw(530/1.5), sh(200/1.5)
    cubic.id = 'cubicR'
    cubic:addEventListener('touch', toucho.touch)
    
    M.cubicText = display.newText(M.group, '', cubic.x - sw(55), cubic.y - sh(10), 'assets/Pusia', 30)
    M.cubicText.anchorX = 0

    FUN.resCreate(M)

    M.shadow = display.newImage(M.group, 'assets/textures/other/shadow.png', px(APPINFO.menu.shadow.x), py(APPINFO.menu.shadow.y))
    changeSize(M.shadow, sw(APPINFO.menu.shadow.width), sh(APPINFO.menu.shadow.height))

    M.brawlers = display.newImage(M.group, 'assets/textures/brawlers/brawler/'..PROFILE_PLAY.brawler..'.png', px(20), py(10))
    M.brawlers.id = 'brawlers'
    M.brawlers:addEventListener('touch', toucho.touch)

    local gadget = display.newImage(M.group, 'assets/textures/brawlers/gadget/shelly_gadget_01.png', M.brawlers.x + sw(150), M.brawlers.y + sh(150))
    gadget.width, gadget.height = sw(gadget.width/8.4), sh(gadget.height/8.4)
    if not FUN.Current_brawler().gadget then 
        gadget.isVisible = false
    else 
        gadget.isVisible = true
        gadget.fill = {type = 'image', filename = 'assets/textures/brawlers/gadget/' .. FUN.Current_brawler().gadget .. '.png'}
    end 

    FUN.rangCreate(M, M.brawlers.x-190, CenterY+60)

    M.brawlpass = display.newImage(M.group, 'assets/textures/button/brawlpass.png', CenterX+FUN.left()+210, M.buttons.regime.y - sh(25))
    M.brawlpass.width, M.brawlpass.height = sw(APPINFO.menu.brawlpass.width), sh(APPINFO.menu.brawlpass.height)

    M.brawlpassText = display.newText(BRAWL_PASS.getNextPrice(true), M.brawlpass.x + sw(106), M.brawlpass.y + sh(35), 'assets/Pusia', 41)
    M.group:insert(M.brawlpassText)

    M.brawlpassText1 = display.newText(PROFILE_PLAY.currentbpo..'/'..BRAWL_PASS.getNextPrice(), M.brawlpass.x, M.brawlpass.y + sh(35), 'assets/Pusia', 28)
    M.group:insert(M.brawlpassText1)

    M.brawlpass.id = 'bp'
    M.brawlpass:addEventListener('touch', toucho.touch)

    M.startAnim()
    M.randReload()

    local mm
    if type(INFO_BR.music) == "table" and PROFILE_PLAY.soundbrawler then
        mm = "assets/music/brawlers/" .. PROFILE_PLAY.brawler .. '/' .. INFO_BR.music[math.random(#INFO_BR.music)]
    elseif INFO_BR.music and PROFILE_PLAY.soundbrawler then
        mm = "assets/music/" .. INFO_BR.music
    end

    if PROFILE_PLAY.soundbrawler and mm then
        local gay = audio.loadStream(mm)
        audio.play(gay, { channel = 5 })
    end

    if not audio.isChannelActive(2) then
        M.mus = audio.play(MUSIC[2], { loops = -1, channel = 2 })
        if PROFILE_PLAY.music then
            audio.resume(MUSIC[2])
        else
            audio.pause(MUSIC[2])
        end
    elseif audio.isChannelPaused(2) then
        if PROFILE_PLAY.music then audio.resume(MUSIC[2]) end
    end

    M.animLock = false
    M.group.xScale, M.group.yScale = PROFILE_PLAY.adapt, PROFILE_PLAY.adapt
    FUN.anim(M)
end

M.delete = function(t)
    if M.updateFunc then
        Runtime:removeEventListener("enterFrame", M.updateFunc)
        M.updateFunc = nil
    end
    FUN.delete(t, MENU)
end

return M
