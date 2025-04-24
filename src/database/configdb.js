import mongoose from "mongoose";

const connect = async () => {
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(
        process.env.MONGO_DB_HOST,
    {dbName: 'test_db'}
    );
console.log("Banco conectado com sucesso!");
} catch (error) {
console.log(error)
}
};

export default { connect };