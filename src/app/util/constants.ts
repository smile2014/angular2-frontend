export const Constants = {
    respThresholdUrl: 'http://210.80.86.148:8080/eInvoiceNumberService/backend/invoiceNotificationThreshold',
    postThresholdUrl: 'http://210.80.86.148:8080/eInvoiceNumberService/backend/invoiceNotificationThreshold',

    respInvoiceNumberUrl: 'http://210.80.86.148:8080/eInvoiceNumberService/backend/availableInvoiceNumber',
    postInvoiceNumberUrl: 'http://210.80.86.148:8080/eInvoiceNumberService/backend/availableInvoiceNumber',
    delInvoiceNumberUrl: 'http://210.80.86.148:8080/eInvoiceNumberService/backend/delAvailableInvoiceNumberGroup',

    invoiceTypeDup: 'duplicateUniformInvoice',
    invoiceTypeTri: 'triplicateUniformInvoice',

    projectOptions: [
        {
            value: 'abStoreA1',
            label: 'abStoreA1'
        },
        {
            value: 'abStoreWeekend',
            label: 'abStoreWeekend'
        }
    ],

    languageOptions: [
        {
            value: 'ch',
            label: '中文'
        },
        {
            value: 'en',
            label: 'English'
        }
    ]
};