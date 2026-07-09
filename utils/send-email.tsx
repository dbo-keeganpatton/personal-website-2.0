export type FormData = {
    subject: string;
    email: string;
    message: string;
};

export async function sendEmail(data: FormData): Promise<{ ok: boolean; message: string }> {
    try {
        const res = await fetch('/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const json = await res.json();
        if (!res.ok) {
            return { ok: false, message: json.error ?? 'Something went wrong.' };
        }
        return { ok: true, message: json.message };
    } catch {
        return { ok: false, message: 'Network error, please try again.' };
    }
}
