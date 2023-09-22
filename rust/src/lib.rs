extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

static mut POWER_LEVEL: i32 = 0;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn get_power_level() -> i32 {
    unsafe {
        log("Dispatch from WASM [Rust] > get_power_level");
        return POWER_LEVEL;
    }
}

#[wasm_bindgen]
pub fn charge_kamehameha() {
    unsafe {
        log("Dispatch from WASM [Rust] > charge_kamehameha");
        POWER_LEVEL += 10;
    }
}

#[wasm_bindgen]
pub fn fire_kamehameha() -> String {
    unsafe {
        log("Dispatch from WASM [Rust] > fire_kamehameha");

        if POWER_LEVEL >= 50 {
            POWER_LEVEL -= 50;
            let message = "¡Kamehameha lanzado con éxito!";

            return message.to_string();
        } else {
            let message = "Necesitas cargar más poder para lanzar el Kamehameha.";

            return message.to_string();
        }
    }
}
