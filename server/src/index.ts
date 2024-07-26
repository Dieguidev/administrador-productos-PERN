import { server } from "./server";
import colors from 'colors';

const PORT = process.env.PORT || 3000;

server.listen(3000, () => {
    console.log(colors.cyan.bold (`Server is running on http://localhost:${PORT}`));

});
