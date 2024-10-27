// Creamos una interface para Usuario
interface User {
    username: string;
    email: string;
}

// Creamos una interface Admin que herede de User y agregamos una propiedad unica
interface Admin extends User {
    adminLevel: number;
}

// Creamos una función que imprime datos de usuario y acepta tanto User como Admin
function mostrarInfoUsuario(usuario: User | Admin): void {
    console.log(`\nUsername: ${usuario.username}`);
    console.log(`Email: ${usuario.email}`);
    if ('adminLevel' in usuario) {
        console.log(`Admin Level: ${usuario.adminLevel}`);
    }
}

// Creamos un usuario normal
const usuario: User = {
    username: 'userDavid123',
    email: 'ddd@gmail.com'
};

// Creamos un usuario tipo Admin
const usuarioAdmin: Admin = {
    username: 'adminDuvan321',
    email: 'dgdg321@admin.com',
    adminLevel: 2
};

// Mostramos información del usuario normal y tipo Admin
mostrarInfoUsuario(usuario);
mostrarInfoUsuario(usuarioAdmin);
