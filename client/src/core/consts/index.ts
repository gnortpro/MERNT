export const GLOBAL_CONST = {
    BASE_PERMISSION: 'View',
    LOADING: 'Loading...',
    ERROR_MESS: 'An error has occurred, please try again later',
    VALIDATION: {
        required: 'Please complete this field',
        maxLength: 'Maximum number of characters allowed:',
    },
    FORMAT: {
        DATE_ONLY: 'DD/MM/YYYY',
        DATE_REVERSED: 'YYYY-MM-DD',
        DATE_AND_TIME: 'DD/MM/YYYY HH:mm:ss',
        DATE_AND_TIME_DATEPICKER: 'DD/MM/YYYY | HH:mm:ss',
        ISO_DATE_ONLY: 'YYYY-MM-DD',
        ISO_DATE_TIME: 'YYYY-MM-DDTHH:mm:ss.sssZ',
        ISO_DATE_INTEGER: 'YYYYMMDD',
        LOCALIZED_FORMAT: 'lll',
    },
    MSG: {
        NODATA: 'Không có dữ liệu', // dữ liệu rỗng
        NODATAFOUND: 'Không tìm thấy dữ liệu',
        PERMISSION_DENY: 'Không có quyền truy cập',
    },
    PAGE_TYPE: {
        CREATE: 'CREATE',
        EDIT: 'EDIT',
        VIEW: 'VIEW',
    },
    SORT_DIRECTION: {
        DESC: -1,
        ASC: 1,
    },
    VNI_CHARACTERS:
        'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý',
};

export const ERROR_URL = {
    404: '/404',
    403: '/403',
};

export const HTTP_STATUS_CODE = {
    200: 200,
    400: 400,
    401: 401,
    403: 403,
    404: 404,
    500: 500,
    503: 503,
};

export const BE_ERROR_CODE = {
    404000: 404000,
};

export enum ERROR_TYPE {
    REQUIRED = 'required',
    MAX_LENGTH = 'maxLength',
    NO_VNMESE_CHAR = 'noVNMeseChar',
    ALLOW_SPECIAL_CHAR = 'allowSpecialChar',
}

export const UserType = {
    USERNAME_PASSWORD: 'USERNAME_PASSWORD',
    GSUITE: 'G_SUITE',
};

export const GLOBAL_REGEX = {
    EMAIL: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};
