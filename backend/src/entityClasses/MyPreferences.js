class MyPreferences {
    constructor(preferences) {
        this.preferences = preferences;   // []
    }

    removePreference(preference) {
        let idx = preferences.indexOf(preference)
        this.preferences.splice(idx, 1);
    }

    // getter
    get getPreferences() {
        return this.preferences;
    }

    // setter
    set addPreference(preference) {
        this.preferences.push(preference);
    }


}

export default MyPreferences