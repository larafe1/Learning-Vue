export type FriendDTO = {
  id: string | number;
  name: string;
  phone: string;
  email: string;
  isFavorite: boolean;
};

export interface IFriendContact {
  props: {
    id: {
      type: StringConstructor<string>;
      required: boolean;
    };
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
    isFavorite: {
      type: BooleanConstructor<boolean>;
      default: boolean;
    };
  };
  emits: {
    [key: string]: (parameter: string | number) => void;
  };
  data: () => {
    detailsAreVisible: boolean;
  };
  inject: string[];
  computed: {
    buttonCaption: () => string;
  };
  methods: {
    handleShowFriendData: () => void;
    handleToggleFriendAsFavorite: () => void;
    handleDeleteFriend: () => void;
  };
}

export interface ICreateFriend {
  emits: string[];
  data: () => {
    enteredName: string;
    enteredPhoneNumber: string;
    enteredEmailAddress: string;
  };
  methods: {
    handleFormSubmit: () => void;
  };
}

export interface IApp {
  components: Record<IFriendContact, ICreateFriend>;
  data: () => {
    friends: FriendDTO[];
  };
  provide: () => {
    friendsArr: FriendDTO[];
  };
  methods: {
    handleFavoriteStatus: (friendId: string | number) => void;
    handleAddNewFriend: (friendDTO: FriendDTO) => void;
    handleDeleteFriend: (friendId: string | number) => void;
  };
}
