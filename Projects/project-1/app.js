const generateRandomValue = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      specialAttackCharge: 0,
      battleLogs: [],
      isGameOver: false,
      gameWinner: ''
    };
  },
  watch: {
    playerHealth(healthValue) {
      if (healthValue <= 0) {
        this.isGameOver = true;
        this.insertGameWinnerMsg('Monster');
      }
    },
    monsterHealth(healthValue) {
      if (healthValue <= 0) {
        this.isGameOver = true;
        this.insertGameWinnerMsg('Player');
      }
    }
  },
  computed: {
    monsterHealthBarStyles() {
      if (this.monsterHealth <= 0) {
        return { width: '0%' };
      } else {
        return { width: this.monsterHealth + '%' };
      }
    },
    playerHealthBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: '0%' };
      } else {
        return { width: this.playerHealth + '%' };
      }
    },
    specialAttackAvailable() {
      return this.specialAttackCharge % 3 !== 0;
    }
  },
  methods: {
    handleAttackPlayer() {
      const monsterGivenDamage = generateRandomValue(8, 15);
      this.playerHealth -= monsterGivenDamage;
      this.insertAttackMsg('Monster', monsterGivenDamage);
    },
    handleAttackMonster() {
      this.specialAttackCharge++;
      const playerGivenDamage = generateRandomValue(5, 12);
      this.monsterHealth -= playerGivenDamage;
      this.insertAttackMsg('Player', playerGivenDamage);
      this.handleAttackPlayer();
    },
    handleSpecialAttackMonster() {
      this.specialAttackCharge++;
      const playerGivenDamage = generateRandomValue(10, 25);
      this.monsterHealth -= playerGivenDamage;
      this.insertAttackMsg('Player', playerGivenDamage);
      this.handleAttackPlayer();
    },
    handleHealPlayer() {
      const healValue = generateRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) return;
      this.specialAttackCharge++;
      this.playerHealth += healValue;
      this.insertHealMsg(healValue);
    },
    handlePlayerSurrender() {
      this.isGameOver = true;
      this.insertGameWinnerMsg('Monster');
    },
    handleStartNewGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.battleLogs = [];
      this.specialAttackCharge = 0;
      this.isGameOver = false;
      this.gameWinner = '';
    },
    insertAttackMsg(entity, dmgValue) {
      this.battleLogs.push(`${entity} attacks and deals ${dmgValue}`);
    },
    insertHealMsg(healthValue) {
      this.battleLogs.push('Player heals himself for ' + healthValue);
    },
    insertGameWinnerMsg(entity) {
      this.gameWinner = entity + ' won the game';
      this.battleLogs.push(entity + ' won the game');
    }
  }
});

app.mount('#game');
