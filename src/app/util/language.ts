import { I18nService } from "./i18n-service.provider";

export var i18n: I18nService = new I18nService();

export var language = {
    defaultLang: 'ch',
    lang: {
        "textLanguage": {
            en: "English",
            ch: "中文"
        },
        "invoiceManagement": {
            en: "Invoice Number Management",
            ch: "發票號碼管理"
        },
        "invoiceNotification": {
            en: "Invoice Amount Notification",
            ch: "剩餘數量通知"
        },
        "changeLanguage": {
            en: "Change Language Test",
            ch: "切換語言測試"
        },
        "projectName": {
            en: "Project Name:",
            ch: "專案名稱："
        },
        "language": {
            en: "Language:",
            ch: "選擇語言："
        },
        "threshold": {
            en: "Threshold:",
            ch: "門檻值："
        },
        "duplicateUniform": {
            en: "DuplicateUniform Invoice",
            ch: "二聯式發票"
        },
        "triplicateUniform": {
            en: "TriplicateUniform Invoice:",
            ch: "三聯式發票"
        },
        "notificationPre": {
            en: "Notification when the invoice quantity is less than ",
            ch: "剩餘數量少於"
        },
        "notificationPost": {
            en: " sheets",
            ch: "張時通知"
        },
        "updateThreshold": {
            en: "Update Threshold",
            ch: "更新門檻通知"
        },
        "copyright": {
            en: "Copyright©ACER INCORPORATED",
            ch: "版權所有©宏碁股份有限公司"
        },
        "startNumber": {
            en: "Start Number:",
            ch: "起始號碼："
        },
        "endNumber": {
            en: "End Number:",
            ch: "結束號碼："
        },
        "updateNumber": {
            en: "Update Invoice Number",
            ch: "更新發票號碼"
        },
        "startNumberTable": {
            en: "Start Number",
            ch: "起始號碼"
        },
        "endNumberTable": {
            en: "End Number",
            ch: "結束號碼"
        },
        "invoiceAmount": {
            en: "Amount",
            ch: "每組張數"
        },
        "delete": {
            en: "Delete",
            ch: "刪除"
        },
        "invoiceNumber": {
            en: "Invoice Number",
            ch: "發票號碼"
        }
    }
};