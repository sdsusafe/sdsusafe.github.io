export function getMarkerColor(available) {
    if (typeof available !== 'number') return '#6c757d'; // Gray for unknown
    if (available === 0) return '#dc3545'; // Red - full
    if (available < 10) return '#ffc107'; // Yellow - limited
    return '#28a745'; // Green - available
}

export function getStatusText(available) {
    if (typeof available !== 'number') return 'Unknown';
    if (available === 0) return 'Full';
    if (available < 10) return 'Limited';
    return 'Available';
}

export function getStatusClass(available) {
    if (typeof available !== 'number') return 'status-unknown';
    if (available === 0) return 'status-full';
    if (available < 10) return 'status-limited';
    return 'status-available';
}

export function getStatusType(available) {
    if (typeof available !== 'number') return 'unknown';
    if (available === 0) return 'full';
    if (available < 10) return 'limited';
    return 'available';
}
