declare global {
  interface Window {
    utag: any;
    utag_data: Record<string, any>;
  }
}

export class TealiumService {
  private static instance: TealiumService;
  private initialized = false;

  private constructor() {}

  static getInstance(): TealiumService {
    if (!TealiumService.instance) {
      TealiumService.instance = new TealiumService();
    }
    return TealiumService.instance;
  }

  init(account: string, profile: string, environment: string) {
    if (this.initialized) return;

    // Initialize utag_data object
    window.utag_data = {};

    // Load Tealium
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://tags.tiqcdn.com/utag/${account}/${profile}/${environment}/utag.js`;
    document.head.appendChild(script);

    this.initialized = true;
  }

  track(eventName: string, data: Record<string, any>) {
    if (!window.utag) {
      console.warn('Tealium not initialized');
      return;
    }

    window.utag.track(eventName, {
      ...data,
      event_name: eventName,
      page_name: window.location.pathname,
      site_section: window.location.pathname.split('/')[1] || 'home',
      timestamp: new Date().toISOString(),
    });
  }

  view(data: Record<string, any>) {
    this.track('view', data);
  }

  link(data: Record<string, any>) {
    this.track('link', data);
  }
}

// Create a singleton instance
const tealiumService = TealiumService.getInstance();

// Export a global tracking function
export const trackEvent = (eventName: string, data: Record<string, any>) => {
  tealiumService.track(eventName, data);
};

// Export the singleton instance for initialization
export const initTealium = (account: string, profile: string, environment: string) => {
  tealiumService.init(account, profile, environment);
};