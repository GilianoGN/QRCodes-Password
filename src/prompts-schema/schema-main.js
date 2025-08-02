import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta: \n(1) - QRCode \n(2) - Password\nOpção"),
        pattern: /^(1|2)$/,
        message: chalk.red.italic("Opção inválida. Por favor, escolha 1 ou 2."),
        required: true,        
    },
];

export default promptSchemaMain;