import { defineChain } from "viem";

export const disgodev = defineChain({
    id: 105,
    name: 'DisgoDev',
    network: 'disgodev',
    nativeCurrency: {
        decimals: 18,
        name: 'DISGO Token',
        symbol: 'DISGO',
    },
    rpcUrls: {
        default: {
            http: ['https://ubiquitous-doodle-w679g64q5v2v57g-9650.app.github.dev/ext/bc/disgodev/rpc']
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://subnets-test.avax.network/echo' },
    },
    // Custom variables
    iconUrl: "/chains/logo/173750.png",
    icm_registry: "0xF86Cb19Ad8405AEFa7d09C778215D2Cb6eBfB228"
});