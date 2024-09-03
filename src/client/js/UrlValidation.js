const UrlValidation = (url) => {
    try {
        const parsedUrl = new URL(url);
        return ['http:', 'https:'].includes(parsedUrl.protocol); // Only allow http and https URLs
    } catch (error) {
        return false; // URL is invalid
    }
}

export { UrlValidation };
