// src/lib/utils/date.ts
export function formatRelative(dateStr: string): string {
	const now = new Date();
	const then = new Date(dateStr);
	const diffMs = now.getTime() - then.getTime();
	const diffSec = Math.round(diffMs / 1000);
	const diffMin = Math.round(diffSec / 60);
	const diffHour = Math.round(diffMin / 60);
	const diffDay = Math.round(diffHour / 24);

	if (diffSec < 60) return 'Baru saja';
	if (diffMin < 2) return '1 menit lalu';
	if (diffMin < 60) return `${diffMin} menit lalu`;
	if (diffHour < 2) return '1 jam lalu';
	if (diffHour < 24) return `${diffHour} jam lalu`;
	if (diffDay === 1) return 'Kemarin';
	return `${diffDay} hari lalu`;
}

export function formatDate(dateStr: string): string {
	const d = new Date(dateStr);
	return d.toLocaleDateString('id-ID', {
		weekday: 'long', // Kamis
		day: 'numeric', // 25
		month: 'long', // Desember
		year: 'numeric' // 2025
	});
}
