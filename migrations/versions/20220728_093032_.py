"""empty message

Revision ID: bddba3eac011
Revises: 5889519005f5
Create Date: 2022-07-28 09:30:32.318424

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bddba3eac011'
down_revision = '5889519005f5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('tickets', 'for_sale')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('tickets', sa.Column('for_sale', sa.BOOLEAN(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
