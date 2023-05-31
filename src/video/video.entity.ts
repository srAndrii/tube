import { CommentEntity } from "src/comment/comment.entity";
import { UserEntity } from "src/user/user.entity";
import { Base } from "src/utils/base";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('Video')
export class VideoEntity extends Base {
    @Column({ default: '' })
    name: string

    @Column({ default: 0 })
    views?: number

    @Column({ default: 0 })
    likes?: number

    @Column({ default: 0 })
    duration?: number

    @Column({ default: '', type: 'text' })
    description: string

    @Column({ default: '', name: 'video_path' })
    videoPath: string

    @Column({ default: '', name: 'thumbnail_path' })
    thumbnailPath: string

    @ManyToOne(() => UserEntity, user => user.videos)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity

    @OneToMany(() => CommentEntity, comment => comment.video)
    comments: CommentEntity[]


}