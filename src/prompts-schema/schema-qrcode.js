import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link para gerar o QRCode:"),
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha entre o tipo de QRCode: \n(1) - Normal \n(2) - Terminal \nOpção"),
        pattern : /^[1-2]+$/,   
        message: chalk.red.italic("Opção inválida. Por favor, escolha 1 ou 2."),
        required: true,        
    },
];

export default promptSchemaQRCode;