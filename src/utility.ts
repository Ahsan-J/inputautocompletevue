import _ from 'lodash';

export const validate = (v: unknown): boolean => !_.isUndefined(v) && !_.isNull(v) && !_.isEmpty(v);

export const getId = () => {
    const S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}