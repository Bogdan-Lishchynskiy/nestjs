export interface LoggerConfiguratorInterface {
    
    getConfig(): {
        format: Object,
        transports: Object[]
    },

    getName(): string
  }
  