import {
    Camera, Directory, watchCameras
} from '../';

process.on('SIGINT', () => process.exit());

try {
    const camera = new Camera();
    camera.connect();

    for (const volume of camera.getVolumes()) {
        console.log(volume);
        console.log(JSON.parse(JSON.stringify(volume)));
        for (const entry of volume.getEntries()) {
            console.log(entry);
            if (entry instanceof Directory) {
                console.log(entry.getEntries());
            }
        }
    }
} catch (e) {
    console.log(e);
}

process.exit();