import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'YogaGarhi - Yoga Teacher Training in Bali'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'system-ui',
                    padding: '80px',
                }}
            >
                <div
                    style={{
                        fontSize: 96,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        textAlign: 'center',
                    }}
                >
                    YOGAGARHI
                </div>
                <div
                    style={{
                        fontSize: 42,
                        textAlign: 'center',
                        opacity: 0.95,
                        maxWidth: 900,
                    }}
                >
                    Yoga Teacher Training in Bali
                </div>
                <div
                    style={{
                        fontSize: 32,
                        marginTop: 30,
                        opacity: 0.9,
                        textAlign: 'center',
                    }}
                >
                    100 • 200 • 300 Hour Yoga Alliance Certified Programs
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
