export type Friend = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

export interface IFriendContact {
  props: {
    name: {
      type: StringConstructor<string>;
      required: boolean;
    };
    phoneNumber: {
      type: StringConstructor<string>;
      required: boolean;
      default: StringConstructor<string>;
    };
    emailAddress: StringConstructor<string>;
  };
  data: () => {
    detailsAreVisible: boolean;
  };
  methods: {
    handleShowFriendData: () => void;
  };
}

export interface IApp {
  components: Record<IFriendContact>;
  data: () => {
    friends: Friend[];
  };
}
