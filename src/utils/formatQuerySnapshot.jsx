export const formatDataFromQuerySnapshot = (data = [], firstElement = false) => {
    try {
        let result = [];
        data.docs.forEach(item => {
            result = [...result, item.data()];
        });

        if (firstElement && result.length > 0) {
            result = result[0];
        }

        return firstElement && result.length === 0 ? {} : result;

    } catch ({ message }) {
        throw new Error(message);
    }
}