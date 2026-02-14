import { useEffect, useState } from 'react';

const ANALYTICS_IDLE_TIMEOUT_MS = 8000;

export default function LazyAnalytics() {
  const [AnalyticsComponent, setAnalyticsComponent] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return;
    }

    let canceled = false;
    let idleHandle = null;
    let timeoutHandle = null;

    const loadAnalytics = async () => {
      if (canceled) {
        return;
      }

      try {
        const analyticsModule = await import('@vercel/analytics/react');
        if (!canceled && analyticsModule?.Analytics) {
          setAnalyticsComponent(() => analyticsModule.Analytics);
        }
      } catch (error) {
        console.error('Failed to load Vercel analytics', error);
      }
    };

    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(() => {
        void loadAnalytics();
      }, { timeout: ANALYTICS_IDLE_TIMEOUT_MS });
    } else {
      timeoutHandle = window.setTimeout(() => {
        void loadAnalytics();
      }, ANALYTICS_IDLE_TIMEOUT_MS);
    }

    return () => {
      canceled = true;
      if (idleHandle && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, []);

  if (!AnalyticsComponent) {
    return null;
  }

  return <AnalyticsComponent />;
}
