import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.error("Error occurred:", err);
        return;
    }
    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green.bold("\nQRCode gerado com sucesso!"));
        console.log(qrcode);
    });
}

export default handle;