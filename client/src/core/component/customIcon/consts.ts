export const DEFAULT = {
    MODE: 'outline',
    COLOR: 'inherit',
};

export const SIZE = {
    s: 16,
    m: 20,
    l: 24,
    xl: 40,
};

export type SizeType = keyof typeof SIZE;

export type ModeType = 'outline' | 'fill' | 'logo';

export type IconType =
    // Outline Icons
    | 'home'
    | 'play_video'
    | 'add_photo'
    | 'alert_triangle'
    | 'android_more'
    | 'arrow_down'
    | 'arrow_download'
    | 'arrow_left'
    | 'longarrow_left'
    | 'arrow_right'
    | 'longarrow_right'
    | 'arrow_share'
    | 'arrow_undo'
    | 'arrow_back'
    | 'arrow_up'
    | 'badge_thumbsup'
    | 'bell_notification'
    | 'bookmark_star'
    | 'calendar'
    | 'campaign'
    | 'card_clock'
    | 'check_circle'
    | 'clock_time'
    | 'close_mark'
    | 'cloud_upload'
    | 'copy_paste'
    | 'data_user'
    | 'document_chart'
    | 'document_default'
    | 'document_export'
    | 'download_button'
    | 'drag_drop'
    | 'filter'
    | 'information'
    | 'minus_circle'
    | 'minus'
    | 'mobile_tablet'
    | 'pen'
    | 'photo'
    | 'plus_circle'
    | 'plus'
    | 'reload_clock'
    | 'sale_badge'
    | 'search_loupe'
    | 'setting'
    | 'slider'
    | 'square_ads'
    | 'sticker_smile'
    | 'trash'
    | 'uploading'
    | 'view_on'
    | 'view_hidden'
    | 'wallet'
    | 'zoom_in'
    | 'document_code'
    | 'checkbox_check'
    | 'checkbox_indeterminate'
    | 'longarrow_down'
    | 'longarrow_up'
    | 'circle_block'
    | 'square_key'
    | 'exit_door'
    | 'server_database'
    | 'table_edit'

    // Fill Icons
    | 'alert_circle'
    | 'alert_triangle'
    | 'check_circle'
    | 'close_circle'
    | 'close_circle_ink300s'
    | 'close_circle_white500'
    | 'clock'
    | 'currency'
    | 'drop_up'
    | 'drop_down'
    | 'information'
    | 'apple_logo'
    | 'drag_drop'
    | 'android_logo'
    | 'join'
    | 'discover'
    | 'buy'
    | 'order'
    | 'play'
    | 'redeem'
    | 'see'
    | 'take'

    // Logo Icons
    | 'logo_google'
    | 'square_profile';
