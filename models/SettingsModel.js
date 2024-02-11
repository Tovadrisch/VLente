import AsyncStorage from '@react-native-async-storage/async-storage';

export class SettingsModel {

    static async getUsers() {
        const valueFromStorage = await AsyncStorage.getItem('users')
        return (JSON.parse(valueFromStorage) || []);
    };

    static async getEnters() {
        const valueFromStorage = await AsyncStorage.getItem('enters')
        return (JSON.parse(valueFromStorage) || []);
    };

    static async getArticles() {
        const valueFromStorage = await AsyncStorage.getItem('articles')
        return (JSON.parse(valueFromStorage) || []);
    };

    static async getArticleImages() {
        const valueFromStorage = await AsyncStorage.getItem('article_images')
        return (JSON.parse(valueFromStorage) || []);
    };

    static async getSubscriptions() {
        const valueFromStorage = await AsyncStorage.getItem('subscriptions')
        return (JSON.parse(valueFromStorage) || []);
    };

    static async setUsers(users) {
        await AsyncStorage.setItem('users', JSON.stringify(users));
    };

    static async setEnters(enters) {
        await AsyncStorage.setItem('enters', JSON.stringify(enters));
    };

    static async setArticles(articles) {
        await AsyncStorage.setItem('articles', JSON.stringify(articles));
    };

    static async setArticleImages(article_images) {
        await AsyncStorage.setItem('article_images', JSON.stringify(article_images));
    };

    static async setSubscriptions(subscriptions) {
        await AsyncStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    };
}
