export interface AboutWindowInfo {
    icon_path: string;
    copyright: string;
    homepage: string;
    win_options?: Electron.BrowserWindowOptions;
}

export default function openAboutWindow(into: AboutWindowInfo): Electron.BrowserWindow;
