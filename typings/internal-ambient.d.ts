declare namespace NodeJS {
  interface FeaturesBinding {
    isDesktopCapturerEnabled(): boolean;
    isOffscreenRenderingEnabled(): boolean;
    isPDFViewerEnabled(): boolean;
    isRunAsNodeEnabled(): boolean;
    isFakeLocationProviderEnabled(): boolean;
    isViewApiEnabled(): boolean;
    isTtsEnabled(): boolean;
    isPrintingEnabled(): boolean;
  }

  interface V8UtilBinding {
    getHiddenValue<T>(obj: any, key: string): T;
    setHiddenValue<T>(obj: any, key: string, value: T): void;
  }
  interface Process {
    /**
     * DO NOT USE DIRECTLY, USE process.atomBinding
     */
    binding(name: string): any;
    atomBinding(name: string): any;
    atomBinding(name: 'features'): FeaturesBinding;
    atomBinding(name: 'v8_util'): V8UtilBinding;
    atomBinding(name: 'app'): { app: Electron.App, App: Function };
    atomBinding(name: 'browser_view'): { BrowserView: typeof Electron.BrowserView };
    atomBinding(name: 'command_line'): Electron.CommandLine;
    atomBinding(name: 'content_tracing'): Electron.ContentTracing;
    atomBinding(name: 'global_shortcut'): { globalShortcut: Electron.GlobalShortcut };
    atomBinding(name: 'in_app_purchase'): { inAppPurchase: Electron.InAppPurchase; InAppPurchase: Function };
    atomBinding(name: 'notification'): { Notification: typeof Electron.Notification; isSupported: () => boolean };
    atomBinding(name: 'system_preferences'): { systemPreferences: Electron.SystemPreferences; SystemPreferences: Function };
    atomBinding(name: 'window'): { BrowserWindow: typeof Electron.BrowserWindow };
    log: NodeJS.WriteStream['write'];
    activateUvLoop(): void;

    // Additional methods
    getRenderProcessPreferences(): Array<Electron.RendererProcessPreference> | null;

    // Additional events
    once(event: 'document-start', listener: () => any): this;
    once(event: 'document-end', listener: () => any): this;
  }
}

declare interface Window {
  ELECTRON_DISABLE_SECURITY_WARNINGS?: boolean
  ELECTRON_ENABLE_SECURITY_WARNINGS?: boolean
}
