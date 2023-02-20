import { Schema, model } from "mongoose";

const RoomSchema = new Schema({
  title: String,
  iconId: Number,
  livingArea: {
    type: Schema.Types.ObjectId,
    ref: "livingArea",
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "owner",
    required: true,
  },
  userComments: {
    type: Schema.Types.ObjectId,
    ref: "userComments",
  },
  userImages: {
    type: Schema.Types.ObjectId,
    ref: "userImages",
  },
  userTags: {
    type: Schema.Types.ObjectId,
    ref: "userImages",
  },
});

export = model("room", RoomSchema);

// @Column({ default: '' })
//   title: string;
//
//   @Column({ default: 0 })
//   iconId: number;
//
//   @ManyToOne(() => PersonalArea, (personalArea) => personalArea.personalRooms)
//   personalArea: PersonalArea;
//
//   @ManyToOne(() => CoreUser, (user) => user.personalRooms, {
// onDelete: 'CASCADE',
//   })
//   user: CoreUser;
//
//   @OneToMany(() => UserComment, (userComment) => userComment.personalRoom)
//   userComments: UserComment[];
//
//   @ManyToMany(() => UserImage, (userImage) => userImage.personalRooms)
//   @JoinTable()
//   userImages: UserImage[];
//
//   @ManyToMany(() => UserTag, (userTag) => userTag.personalRooms, {
// cascade: ['insert', 'update'],
//   })
//   userTags: UserTag[];
