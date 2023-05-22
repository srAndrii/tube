import { Column, Entity } from "typeorm";

@Entity('User')
export class UserEntity extends Base {
    @Column({ unique: true })
    email: string

    @Column({ select: false })
    password: string

    @Column({ default: '' })
    name: string

    @Column({ default: false, name: 'is_verified' })
    isVerified: boolean

    @Column({ default: 0, name: 'subscribers_count' })
    subscriberCount?: number

    @Column({ default: '', type: 'text' })
    description: string

    @Column({ default: '', name: 'avatar_path' })
    avatarPath: string
}