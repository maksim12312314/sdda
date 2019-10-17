class Config
{
    constructor()
    {
        this.config = {}
    }

    getCell(key, def)
    {
        return this.config[key] || def;
    }

    setCell(key, value)
    {
        this.config[key] = value;
    }
}

const config = new Config();
config.setCell("StoreAddress", "http://192.168.0.100:1180/");

export default config;