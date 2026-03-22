local M = {}
local SHOP_MODULE = require 'ui.modules.shop'
local items = {
    'mega','packet'
}
local visib = false
Catalog = require 'ui.modules.Catalog'
Catalog.create()
M.create = function(an)
  M.tas = true
    if not M.group then
        M.bgG = display.newGroup()
        M.group = display.newGroup()
        M.bgG.isVisible = visib
        M.group.isVisible = visib
        M.group.xScale, M.group.yScale = 0.3, 0.3
        M.group.alpha = 0
        M.group.y = CenterY + 40

        local bg = display.newImage(M.bgG, "LunarFestival_lobby.png", system.DocumentsDirectory)
bg.x,bg.y = px(0),py(0)
        changeSize(bg, ContentW, ContentH)  

        local exits = display.newImage(M.group, 'assets/textures/button/exit.png', CenterX-700, CenterY-295)  
        exits.width, exits.height = 274/1.6, 174/1.6  
        exits:addEventListener('tap', function()  
            audio.play(MUSIC_1[1])  
            FUN.delete(MENU, SHOP)  
        end)  

        FUN.createTextWithShadow{  
            parent=M.group, text='Магазин',  
            x=CenterX, y=CenterY-290, font='assets/Pusia', fontSize=52,  
            width=ContentW-50, align='center', color={0.95,0.95,0.95}  
        }  

        local scroll = widget.newScrollView{  
            x=CenterX, y=CenterY+40,  
            width=ContentW, height=ContentH-160,  
            hideBackground=true, verticalScrollDisabled=true  
        }  
        M.group:insert(scroll)  

        local g = display.newGroup()  
        scroll:insert(g)  

        local startX = CenterX - (#items-1)*280/2
      for i = 1,#items do 
        if not PROFILE_PLAY.shop[items[i]] then 
        local action = display.newImage(g,imageP('actions/' .. items[i]),startX,CenterY-60)
        if PROFILE_PLAY.shop[items[i]] then 
          action.alpha = 0.6 
          end
        action:addEventListener('tap',function()
          if SHOP.tas and SHOP_MODULE[items[i]] and  not PROFILE_PLAY.shop[items[i]] then 
          SHOP_MODULE[items[i]]() 
            visib = true 
        NEW_DATA()
          else 
            if not SHOP_MODULE[items[i]] then 
              And.Toast(('Функции ' .. items[i] .. ' нет'),0)
              end
          end
          end)
        startX=startX+action.width-60
        end
        end
local catalog = display.newImage(g,imageP('actions/catalog'),startX+180,CenterY-82)
catalog:addEventListener('tap',function()
  FUN.delete(Catalog,M)
  end)
        FUN.resCreate(M)
        catalog.xScale,catalog.yScale = 0.9,0.9
    else
        M.group.isVisible = true
        M.bgG.isVisible = true
        FUN.resCreate(M)
    end
        M.group.xScale,M.group.yScale = PROFILE_PLAY.adapt,PROFILE_PLAY.adapt
    FUN.anim(M)
end

return M