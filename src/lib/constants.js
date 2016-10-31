'use strict';

const dir = __dirname;

exports.AppName = 'Clipt';

exports.ClipType = {
  Image: 'Image',
  Text: 'Text'
};

exports.Db = {
  Path: '.db/clipt.sqlite3',
  UserData: 'userData',
};

exports.IndexHtml = `file://${dir}/../index.html`;

exports.Message = {
  App: {
    Activate: 'activate',
    Closed: 'closed',
    DidFinishLoad: 'did-finish-load',
    Ready: 'ready',
    WillQuit: 'will-quit',
    WindowsAllClosed: 'window-all-closed'
  },
  Ipc: {
    ClipCopied: 'clip-copied',
    ClipDeleted: 'clip-deleted',
    Clips: 'clips',
    ClipsReady: 'clips-ready',
    ClipStarred: 'clip-starred',
    ClipUnstarred: 'clip-unstarred',
    DeleteClip: 'delete-clip',
    FetchClips: 'fetch-clips',
    OpenLink: 'link',
    StarClip: 'star-clip',
    UnstarClip: 'unstar-clip'
  },
  TitleBar: {
    ButtonClicked: 'title-bar-button-clicked'
  }
};

exports.Modal = {
  About: 'about',
  ReadyToShow: 'ready-to-show',
  Settings: 'settings'
};

exports.Platform = {
  Mac: 'darwin',
  Win: 'win32'
};

exports.SettingsHtml = `file://${dir}/../views/modals/settings.html`;

exports.Shortcut = {
  OpenKey: 'CommandOrControl+`',
  OpenError: 'Failed to register CommandOrControl+`'
};

exports.TitleBar = {
  Close: 'close',
  Maximize: 'maximize',
  Minimize: 'minimize'
};

exports.Tray = {
  MacIcon: `${dir}/../assets/images/icon@2x.png`,
  WinIcon: `${dir}/../assets/images/icon.ico`,
  Menu: {
    AboutLabel: 'About Clipt',
    PreferencesLabel: 'Preferences...',
    QuitLabel: 'Quit Clipt',
    QuitRole: 'quit',
    ShowLabel: 'Show',
    TypeNormal: 'normal',
    TypeSeparator: 'separator'
  }
};