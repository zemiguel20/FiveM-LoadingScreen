# FiveM-LoadingScreen
Loading screen made for FiveM server

## Install

Go to the [releases section](https://github.com/zemiguel20/FiveM-LoadingScreen/releases) and dowload the "SourceCode" file of the lastest version. <br>
Extract inside a folder named `LoadingScreen`, that can be placed anywhere inside the `resources` folder and then add `ensure LoadingScreen` to the `server.cfg` file.

## Loading screen lifetime

[Manually shut down the loading screen](https://docs.fivem.net/docs/scripting-manual/nui-development/loading-screens/#lifetime)

Add `loadscreen_manual_shutdown 'yes'` to the `fxmanifest.lua` file and then on another *client* script call the `ShutdownLoadingScreenNui` function.