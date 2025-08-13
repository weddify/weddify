// src/lib/utils/date.ts
export function formatRelative(dateStr: string): string {
	if (!dateStr) return '';

	const then = new Date(dateStr);
	if (isNaN(then.getTime())) return '';

	const now = new Date();
	const diffMs = now.getTime() - then.getTime();

	const diffSec = Math.round(diffMs / 1000);
	const diffMin = Math.round(diffSec / 60);
	const diffHour = Math.round(diffMin / 60);
	const diffDay = Math.round(diffHour / 24);
	const diffWeek = Math.round(diffDay / 7);
	const diffMonth = Math.round(diffDay / 30.44);
	const diffYear = Math.round(diffDay / 365.25);

	if (diffSec < 60) return 'Baru saja';
	if (diffMin < 60) return `${diffMin} menit lalu`;
	if (diffHour < 24) return `${diffHour} jam lalu`;
	if (diffDay < 7) return `${diffDay} hari lalu`;
	if (diffWeek < 5) return `${diffWeek} minggu lalu`;
	if (diffMonth < 12) return `${diffMonth} bulan lalu`;
	return `${diffYear} tahun lalu`;
}

export function formatDate(dateStr: string): string {
	const d = new Date(dateStr);
	return d.toLocaleDateString('id-ID', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
}

// helper universal
export function indoDate(dateStr: Date | string, separator = '-') {
	if (!dateStr) return '';
	const d = new Date(dateStr + 'T00:00:00');
	const dd = String(d.getDate()).padStart(2, '0');
	const mm = String(d.getMonth() + 1).padStart(2, '0');
	const yyyy = d.getFullYear();
	return `${dd}${separator}${mm}${separator}${yyyy}`;
}
