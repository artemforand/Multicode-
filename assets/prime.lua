local M = {}

M.create = function(brawler)

  M.group = display.newGroup()

  M.back = display.newGroup()
  M.front = display.newGroup()

  M.group:insert(M.back)
  M.group:insert(M.front)

  M.bg = display.newImage(M.group, "prime.png", system.DocumentsDirectory)
M.bg.x,M.bg.y = px(0),py(0)
  changeSize(M.bg, ContentW, ContentH)

  local brawlers = display.newImage(
    M.back,
    imageP('brawlers/brawler/' .. brawler),
    CenterX,
    CenterY
  )

  local spins = 6
  local count = 0
  local time = 350

  local musicChannel1
  local musicChannel2
  local musicChannel3

  musicChannel1 = audio.play(audio.loadStream('assets/music/Prestige_01_sfx.ogg.mp3'))

  local activeTimers = {}

  local function stopAll()
    for i = 1, #activeTimers do
      timer.cancel(activeTimers[i])
    end
    transition.cancel()
    audio.stop()
    if M.group and M.group.removeSelf then
      display.remove(M.group)
    end
    MENU.prime = false
    MENU.create()
  end

 

  local function spin()
    if count >= spins then return end
    count = count + 1

    transition.to(brawlers,{
      time = time,
      xScale = 1,
      yScale = 1,
      alpha = 0.6,
      rotation = -2,
      transition = easing.inOutQuad,
      onComplete = function()
        transition.to(brawlers,{
          time = time,
          xScale = 1.6,
          yScale = 1.6,
          alpha = 1,
          rotation = 2,
          transition = easing.inOutQuad,
          onComplete = function()
            transition.to(brawlers,{
              time = 120,
              rotation = 0,
              transition = easing.outQuad,
              onComplete = spin
            })
          end
        })
      end
    })
  end

  spin()

  local function addTimer(t)
    activeTimers[#activeTimers+1] = t
  end

  addTimer(timer.performWithDelay(3500,function()

    brawlers.isVisible = false

    M.rangTe = display.newImage(
      M.front,
      FUN.rankpath(FUN.getRank()),
      CenterX,
      CenterY+30
    )

 M.rangTe:addEventListener("tap", stopAll)
    M.rangTe.xScale, M.rangTe.yScale = 2,2

    local function pulse(o, xx)
      if not o or not o.removeSelf then return end

      transition.to(o,{
        xScale = 1.25,
        yScale = 1.25,
        alpha = 0.7,
        rotation = 360,
        time = 500,
        transition = easing.outBack,
        onComplete = function()
          if not o or not o.removeSelf then return end
          transition.to(o,{
            xScale = 1,
            yScale = 1,
            alpha = 1,
            x = o.x + xx*3,
            time = 500,
            transition = easing.inOutSine,
            onComplete = function()
              pulse(o, xx)
            end
          })
        end
      })
    end

    local function createBrawler(x, type)
      addTimer(timer.performWithDelay(0,function()
        local obj = display.newImage(
          M.back,
          imageP('brawlers/brawler/' .. brawler),
          x,
          CenterY
        )
        obj.xScale, obj.yScale = 0.2, 0.2
        transition.to(obj,{x = type == '+' and CenterX+200 or CenterX-200,time = 300,onComplete = function()
        pulse(obj, type == '+' and 30 or -30)
        end
        })
      end))
    end

    local function spawn()
      createBrawler(CenterX, '+')
      createBrawler(CenterX, '-')
      addTimer(timer.performWithDelay(2800, spawn))
    end

    spawn()

    local cub = math.floor((FUN.Current_brawler(brawler).cubic) / 1000)
--[[]
    M.icon = display.newImage(
      M.front,
      imageP('brawlers/prime/' .. PROFILE_PLAY.brawler),
      M.rangTe.x,
      M.rangTe.y
    )

    M.icon.xScale, M.icon.yScale = 0.5,0.5
-&]]
    M.cubText = display.newText(
      M.front,
      cub,
      M.rangTe.x,
      M.rangTe.y,
      'assets/Pusia',
      130
    )

    M.cubText1 = display.newText(
      M.front,
      "ПРАЙМ",
      M.rangTe.x,
      M.rangTe.y-310,
      'assets/Pusia',
      80
    )

    M.cubText1:setFillColor(162/255,220/255,255/255)

    addTimer(timer.performWithDelay(500,function()
      musicChannel2 = audio.play(audio.loadStream('assets/music/Prestige_shields_flicker_01.ogg.mp3'))
      transition.to(M.rangTe,{
        xScale = 2.2,
        yScale = 2.2,
        time = 300,
        onComplete = function()
          transition.to(M.rangTe,{xScale = 2,yScale = 2,time = 300})
        end
      })
    end))

    musicChannel3 = audio.play(audio.loadStream('assets/music/Prestige_01_loop.ogg.mp3'))

  end))

end
 
return M