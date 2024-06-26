const defineConfig = (o) => o 

export default defineConfig({

    name: 'My TQDM',
    
    icon: './icon.png', 

    electron: {
        window: {
            height: 800,
            width: 1280
        }
    },

    services: {

        // Packaged with pyinstaller
        tqdm: {
            description: 'TQDM Relay Server',
            src: './src/server.py',
            port: 3768,
            publish: {
                build: 'python -m PyInstaller --name tqdm --onedir --clean ./src/server.py --distpath ./build/tqdm',
                // remote: 'https://python-production-4f11.up.railway.app',
                local: {
                    src: 'tqdm',
                    base: './build/tqdm/tqdm', // Will be copied
                }
            }
        }
    }
})