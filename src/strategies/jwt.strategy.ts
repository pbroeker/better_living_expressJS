import passport from "passport";
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
import { VerifiedCallback } from "passport-jwt";

const jwtSecret = process.env.JWT_SECRET;

export const initStrategy = () => {
  console.log("init passportStrategy");

  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret,
      },
      async (jwt_payload: any, done: VerifiedCallback) => {
        try {
          return done(null, jwt_payload);
        } catch (error) {
          done(error);
        }
      }
    )
  );
};
