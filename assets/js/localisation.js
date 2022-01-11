/**
 * Simple localisation fn.
 * Uses global variable localization.
 *
 * @param msg
 * @returns {*}
 */
function loc(msg) {

    let translationTable = localizationTable;

    if (typeof msg === "string") {

        let haveTranslate = typeof translationTable !== "undefined" &&
            typeof translationTable[msg] !== "undefined" &&
            translationTable[msg];

        if (!haveTranslate) {

            loc.noTranslations.push({
                message: msg,
                trace: (new Error).stack
            })

        }

        msg = haveTranslate ? translationTable[msg] : msg;

    }

    return msg;

}

/**
 * Contains messages that
 * not translated.
 *
 * @type {*[]}
 */
loc.noTranslations = [];