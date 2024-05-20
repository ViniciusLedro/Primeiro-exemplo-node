function sum(x) {
    return new Promise((resolve, reject) => {
        if (Number(x) == NaN) {
            reject('Digite um número corretamente.');
        }
     setTimeout(() => {
      resolve(x + 500);
}, 3000);
});
}

sum(10).then((resultado) => {
    console.log(resultado);
});

async function main() {
    try {
        const resultado = await sum(100);
        console.log(resultado);
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

main()
