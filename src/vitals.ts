const vitalsUrl: string = 'https://vitals.vercel-analytics.com/v1/vitals';
// Define interface for the Network Information API part of the Navigator
interface NetworkInformation extends EventTarget {
  effectiveType?: string;
}

interface NavigatorWithNetworkInformation extends Navigator {
  connection?: NetworkInformation;
}

function getConnectionSpeed(): string {
  const navigatorWithNetworkInfo = navigator as NavigatorWithNetworkInformation;
  return navigatorWithNetworkInfo.connection && navigatorWithNetworkInfo.connection.effectiveType
    ? navigatorWithNetworkInfo.connection.effectiveType
    : '';
}

// // Function to get the connection speed from the browser's navigator object
// function getConnectionSpeed(): string {
//   return 'connection' in navigator &&
//     navigator.connection &&
//     'effectiveType' in navigator.connection
//     ? navigator.connection.effectiveType
//     : '';
// }

// Define a TypeScript interface for the metric parameter
interface Metric {
  id: string;
  name: string;
  value: number;
}

// Function to send analytics data to Vercel
export function sendToVercelAnalytics(metric: Metric): void {
  const analyticsId: string | undefined = process.env.REACT_APP_VERCEL_ANALYTICS_ID;
  if (!analyticsId) {
    return;
  }

  const body: Record<string, string> = {
    dsn: analyticsId,
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  const blob: Blob = new Blob([new URLSearchParams(body).toString()], {
    type: 'application/x-www-form-urlencoded', // This content type is necessary for `sendBeacon`
  });
  
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else {
    // Use fetch as a fallback if sendBeacon is not available
    fetch(vitalsUrl, {
      body: blob,
      method: 'POST',
      credentials: 'omit',
      keepalive: true,
    });
  }
}
