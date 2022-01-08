console.log('This is my first repo on git');

function menu(opcion) {
    switch (opcion) {
        case 1:
            console.log('Esta es mi opcion => 1');
            break;
        case 2:
            console.log('Aqui deberia ir una opcion => 2');
            let a = 10;
            let b = 20;
            console.log(`La suma de ${a} + ${b} es: ${a + b}`);
            break;
        case 3:
            console.log('Esta es mi opcion => 3');
            break;
    }
}

menu(1);