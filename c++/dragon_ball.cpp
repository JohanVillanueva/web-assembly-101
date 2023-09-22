#include <stdio.h>
#include <string>
#include <emscripten/emscripten.h>

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

int power_level = 0;

EXTERN EMSCRIPTEN_KEEPALIVE int get_power_level()
{
    emscripten_run_script("console.log('Dispatch from WASM [C++] > get_power_level')");
    return power_level;
}

EXTERN EMSCRIPTEN_KEEPALIVE void charge_kamehameha()
{
    emscripten_run_script("console.log('Dispatch from WASM [C++] > charge_kamehameha')");
    power_level += 10;
}

EXTERN EMSCRIPTEN_KEEPALIVE const char *fire_kamehameha()
{
    emscripten_run_script("console.log('Dispatch from WASM [C++] > fire_kamehameha')");
    if (power_level >= 50)
    {
        power_level -= 50;
        return "¡Kamehameha lanzado con éxito!";
    }
    return "Necesitas cargar más poder para lanzar el Kamehameha.";
}
