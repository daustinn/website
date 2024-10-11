/** @type {import('next').NextConfig} */
const nextConfig = {}

import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
