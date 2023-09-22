# Installation Tutorials
- https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_Wasm
- https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm
# Activate Emscripten cli
> cd ~/emsdk

> ./emsdk activate latest --permanent

> source "/Users/{YOUR_USER_NAME}/emsdk/emsdk_env.sh"

> echo 'source "/Users/{YOUR_USER_NAME}/emsdk/emsdk_env.sh"' >> $HOME/.zprofile

> cd upstream/emscripten

> ./emcc -v


# C - Build
> emcc dragon_ball.c -o dragon_ball.js

# C++ - Build
> em++ dragon_ball.cpp -o dragon_ball.js

# Rust - build
## Inside Rust project
> wasm-pack build --target web -d dist --no-pack