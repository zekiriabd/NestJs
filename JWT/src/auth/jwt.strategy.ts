import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientService } from 'src/services/client.service';
import { ExtractJwt, Strategy } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private clientService: ClientService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'superSecretKey@345',
    });
  }

  async validate(payload: any) {
    const client = this.clientService.getClientById(payload.sub);
    if (client) {
        return true;
    } else {
        throw new UnauthorizedException();
        return false;
    }
  }
}