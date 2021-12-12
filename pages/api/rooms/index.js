import nc from 'next-connect';
import Room from '../../../models/Room';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
	await db.connect();
	const rooms = await Room.find({});
	await db.disconnect();
	res.send(rooms);
});

export default handler;
