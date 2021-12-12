import nc from 'next-connect';
import Room from '../../models/Room';
import db from '../../utils/db';
import data from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
	await db.connect();
	await Room.deleteMany();
	await Room.insertMany(data.rooms);

	await db.disconnect();
	res.send({ message: 'seeded successfully' });
});

export default handler;
