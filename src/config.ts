import { ChainId } from '@uniswap/sdk';
import { Configuration } from './basis-cash/config';
import { BankInfo, VaultInfo } from './basis-cash';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.MAINNET,
    etherscanUrl: 'https://etherscan.io',
    defaultProvider: 'https://ethnode.steaker.capital',
    deployments: require('./basis-cash/deployments/deployments.mainnet.json'),
    externalTokens: {
      DAI: ['0x6B175474E89094C44Da98b954EedeAC495271d0F', 18],
      SUSD: ['0x57Ab1ec28D129707052df4dF418D58a2D46d5f51', 18],
      USDC: ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6],
      USDT: ['0xdAC17F958D2ee523a2206206994597C13D831ec7', 6],
      YFI: ['0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', 18],
      ESD: ['0x36F3FD68E7325a35EB768F1AedaAe9EA0689d723', 18],
      BAC: ['0x3449FC1Cd036255BA1EB19d65fF4BA2b8903A69a', 18],
      MITH: ['0x3893b9422Cd5D70a81eDeFfe3d5A1c6A978310BB', 18],
      CREAM: ['0x2ba592F78dB6436527729929AAf6c908497cB200', 18],
      FRAX: ['0x853d955aCEf822Db058eb8505911ED77F175b99e', 18],
      CRV: ['0xD533a949740bb3306d119CC777fa900bA034cd52', 18],
      BUSD: ['0x4Fabb145d64652a948d72533023f6E7A623C7C53', 18],
      LINK: ['0x514910771AF9Ca656af840dff83E8264EcF986CA', 18],
      COMP: ['0xc00e94Cb662C3520282E6f5717214004A7f26888', 18],
      AAVE: ['0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9', 18],
      SUSHI: ['0x6B3595068778DD592e39A122f4f5a5cF09C90fE2', 18],
      'MIC_USDT-SUSHI-LPv2': ['0xC9cB53B48A2f3A9e75982685644c1870F1405CCb', 18],
      'MIS_USDT-SUSHI-LPv2': ['0x066F3A3B7C8Fa077c71B9184d862ed0A4D5cF3e0', 18],
      'MICv2_3CRV': ['0x0F8c89d3fB0b502732b338f1dfb3c465Dc856C8e', 18],
      'MICv23CRV': ['0x2B26239f52420d11420bC0982571BFE091417A7d', 18],
      'MIS2_USDT-SUSHI-LPv2': ['0xf9fF921E63B525A73dD3cF57463da53138358A49', 18],
      'MIS3_USDT-SUSHI-LPv2': ['0x097b21e4784c2b224fd8b880939f75b2e9f4dba5', 18],
    },
    baseLaunchDate: new Date('2020-12-30T02:00:00Z'),
    bondLaunchesAt: new Date('2021-01-03T02:00:00Z'),
    boardroomLaunchesAt: new Date('2021-01-03T02:00:00Z'),
    refreshInterval: 3000,
    gasLimitMultiplier: 1.1,
    curvDepositor: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
    swapMic:'0x09b32387fc154b4fa6fd06a9c09a91316f8fe278'
  },
  production: {
    chainId: ChainId.MAINNET,
    etherscanUrl: 'https://etherscan.io',
    defaultProvider: 'https://ethnode.steaker.capital',
    deployments: require('./basis-cash/deployments/deployments.mainnet.json'),
    externalTokens: {
      DAI: ['0x6B175474E89094C44Da98b954EedeAC495271d0F', 18],
      SUSD: ['0x57Ab1ec28D129707052df4dF418D58a2D46d5f51', 18],
      USDC: ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6],
      USDT: ['0xdAC17F958D2ee523a2206206994597C13D831ec7', 6],
      YFI: ['0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', 18],
      ESD: ['0x36F3FD68E7325a35EB768F1AedaAe9EA0689d723', 18],
      BAC: ['0x3449FC1Cd036255BA1EB19d65fF4BA2b8903A69a', 18],
      MITH: ['0x3893b9422Cd5D70a81eDeFfe3d5A1c6A978310BB', 18],
      CREAM: ['0x2ba592F78dB6436527729929AAf6c908497cB200', 18],
      FRAX: ['0x853d955aCEf822Db058eb8505911ED77F175b99e', 18],
      CRV: ['0xD533a949740bb3306d119CC777fa900bA034cd52', 18],
      BUSD: ['0x4Fabb145d64652a948d72533023f6E7A623C7C53', 18],
      LINK: ['0x514910771AF9Ca656af840dff83E8264EcF986CA', 18],
      COMP: ['0xc00e94Cb662C3520282E6f5717214004A7f26888', 18],
      AAVE: ['0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9', 18],
      SUSHI: ['0x6B3595068778DD592e39A122f4f5a5cF09C90fE2', 18],
      'MIC_USDT-SUSHI-LPv2': ['0xC9cB53B48A2f3A9e75982685644c1870F1405CCb', 18],
      'MIS_USDT-SUSHI-LPv2': ['0x066F3A3B7C8Fa077c71B9184d862ed0A4D5cF3e0', 18],
      'MICv2_3CRV': ['0x0F8c89d3fB0b502732b338f1dfb3c465Dc856C8e', 18],
      'MICv23CRV': ['0x2B26239f52420d11420bC0982571BFE091417A7d', 18],
      'MIS2_USDT-SUSHI-LPv2': ['0xf9fF921E63B525A73dD3cF57463da53138358A49', 18],
      'MIS3_USDT-SUSHI-LPv2': ['0x097b21e4784c2b224fd8b880939f75b2e9f4dba5', 18],
    },
    baseLaunchDate: new Date('2020-12-30T02:00:00Z'),
    bondLaunchesAt: new Date('2021-01-03T02:00:00Z'),
    boardroomLaunchesAt: new Date('2021-01-03T02:00:00Z'),
    refreshInterval: 30000,
    gasLimitMultiplier: 1.7,
    curvDepositor: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
    swapMic:'0x09b32387fc154b4fa6fd06a9c09a91316f8fe278'
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  DAIBACLPTokenSharePool: {
    name: 'MIC2-3CRV Pool',
    contract: 'USDTMICLPTokenSharePool',
    depositTokenName: 'MICv23CRV',
    earnTokenName: 'MIS',
    finished: false,
    sort: 1,
  },
  // DAIBASLPTokenSharePool: {
  //   name: 'MIS2-USDT Pool',
  //   contract: 'USDTMISLPTokenSharePool',
  //   depositTokenName: 'MIS2_USDT-SUSHI-LPv2',
  //   earnTokenName: 'MIS',
  //   finished: false,
  //   sort: 2,
  // },
  MISLPTokenSharePool3: {
    name: 'MIS3-USDT Pool',
    contract: 'MISLPTokenSharePool3',
    depositTokenName: 'MIS3_USDT-SUSHI-LPv2',
    earnTokenName: 'MIS',
    finished: false,
    sort: 3,
  },
  BACDAIPool: {
    name: 'Earn MIC by DAI',
    contract: 'BACDAIPool',
    depositTokenName: 'DAI',
    earnTokenName: 'MIC',
    finished: true,
    sort: 5,
  },
  BACUSDTPool: {
    name: 'Earn MIC by USDT',
    contract: 'BACUSDTPool',
    depositTokenName: 'USDT',
    earnTokenName: 'MIC',
    finished: true,
    sort: 6,
  },
  BACYFIPool: {
    name: 'Earn MIC by YFI',
    contract: 'BACYFIPool',
    depositTokenName: 'YFI',
    earnTokenName: 'MIC',
    finished: true,
    sort: 13,
  },
  BACESDPool: {
    name: 'Earn MIC by ESD',
    contract: 'BACESDPool',
    depositTokenName: 'ESD',
    earnTokenName: 'MIC',
    finished: true,
    sort: 7,
  },
  BACBACPool: {
    name: 'Earn MIC by BAC',
    contract: 'BACBACPool',
    depositTokenName: 'BAC',
    earnTokenName: 'MIC',
    finished: true,
    sort: 8,
  },
  BACMITHPool: {
    name: 'Earn MIC by MITH',
    contract: 'BACMITHPool',
    depositTokenName: 'MITH',
    earnTokenName: 'MIC',
    finished: true,
    sort: 3,
  },
  BACCREAMPool: {
    name: 'Earn MIC by CREAM',
    contract: 'BACCREAMPool',
    depositTokenName: 'CREAM',
    earnTokenName: 'MIC',
    finished: true,
    sort: 4,
  },
  BACFRAXPool: {
    name: 'Earn MIC by FRAX',
    contract: 'BACFRAXPool',
    depositTokenName: 'FRAX',
    earnTokenName: 'MIC',
    finished: true,
    sort: 11,
  },
  BACCRVPool: {
    name: 'Earn MIC by CRV',
    contract: 'BACCRVPool',
    depositTokenName: 'CRV',
    earnTokenName: 'MIC',
    finished: true,
    sort: 16,
  },
  BACBUSDPool: {
    name: 'Earn MIC by BUSD',
    contract: 'BACBUSDPool',
    depositTokenName: 'BUSD',
    earnTokenName: 'MIC',
    finished: true,
    sort: 12,
  },
  BACLINKPool: {
    name: 'Earn MIC by LINK',
    contract: 'BACLINKPool',
    depositTokenName: 'LINK',
    earnTokenName: 'MIC',
    finished: true,
    sort: 18,
  },
  BACCOMPPool: {
    name: 'Earn MIC by COMP',
    contract: 'BACCOMPPool',
    depositTokenName: 'COMP',
    earnTokenName: 'MIC',
    finished: true,
    sort: 14,
  },
  BACAAVEPool: {
    name: 'Earn MIC by AAVE',
    contract: 'BACAAVEPool',
    depositTokenName: 'AAVE',
    earnTokenName: 'MIC',
    finished: true,
    sort: 15,
  },
  BACSUSHIPool: {
    name: 'Earn MIC by SUSHI',
    contract: 'BACSUSHIPool',
    depositTokenName: 'SUSHI',
    earnTokenName: 'MIC',
    finished: true,
    sort: 17,
  },
  BACSUSDPool: {
    name: 'Earn MIC by SUSD',
    contract: 'BACSUSDPool',
    depositTokenName: 'SUSD',
    earnTokenName: 'MIC',
    finished: true,
    sort: 10,
  },
  BACUSDCPool: {
    name: 'Earn MIC by USDC',
    contract: 'BACUSDCPool',
    depositTokenName: 'USDC',
    earnTokenName: 'MIC',
    finished: true,
    sort: 9,
  },
};

export const vaultDefinitions: { [contractName: string]: VaultInfo } = {
  MISUSDTVault: {
    name: 'MIS-USDT-LP',
    contract: 'MISUSDTVault',
    tokenName: 'MIS_USDT-SUSHI-LPv2',
    finished: false,
    sort: 1,
  },
  MICUSDTVault: {
    name: 'MIC-USDT-LP',
    contract: 'MICUSDTVault',
    tokenName: 'MIC_USDT-SUSHI-LPv2',
    finished: false,
    sort: 1,
  }
};

export default configurations[process.env.NODE_ENV || "development"];
